
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileWordOutline from "../../src/components/MdiFileWordOutline.vue";

test("MdiFileWordOutline snapshot", () => {
  const wrapper = mount(MdiFileWordOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
