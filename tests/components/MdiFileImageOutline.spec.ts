
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImageOutline from "../../src/components/MdiFileImageOutline.vue";

test("MdiFileImageOutline snapshot", () => {
  const wrapper = mount(MdiFileImageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
