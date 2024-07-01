
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPawOffOutline from "../../src/components/MdiPawOffOutline.vue";

test("MdiPawOffOutline snapshot", () => {
  const wrapper = mount(MdiPawOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
