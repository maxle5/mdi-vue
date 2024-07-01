
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTshirtVOutline from "../../src/components/MdiTshirtVOutline.vue";

test("MdiTshirtVOutline snapshot", () => {
  const wrapper = mount(MdiTshirtVOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
