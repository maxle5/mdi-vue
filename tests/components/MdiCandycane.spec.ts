
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandycane from "../../src/components/MdiCandycane.vue";

test("MdiCandycane snapshot", () => {
  const wrapper = mount(MdiCandycane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
