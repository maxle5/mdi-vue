
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckDecagramOutline from "../../src/components/MdiCheckDecagramOutline.vue";

test("MdiCheckDecagramOutline snapshot", () => {
  const wrapper = mount(MdiCheckDecagramOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
