
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScript from "../../src/components/MdiScript.vue";

test("MdiScript snapshot", () => {
  const wrapper = mount(MdiScript, {});
  expect(wrapper.html()).toMatchSnapshot();
});
