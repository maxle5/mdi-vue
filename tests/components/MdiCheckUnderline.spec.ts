
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckUnderline from "../../src/components/MdiCheckUnderline.vue";

test("MdiCheckUnderline snapshot", () => {
  const wrapper = mount(MdiCheckUnderline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
