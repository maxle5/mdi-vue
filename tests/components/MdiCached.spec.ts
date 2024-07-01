
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCached from "../../src/components/MdiCached.vue";

test("MdiCached snapshot", () => {
  const wrapper = mount(MdiCached, {});
  expect(wrapper.html()).toMatchSnapshot();
});
