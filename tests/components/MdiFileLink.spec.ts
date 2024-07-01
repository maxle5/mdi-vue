
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileLink from "../../src/components/MdiFileLink.vue";

test("MdiFileLink snapshot", () => {
  const wrapper = mount(MdiFileLink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
