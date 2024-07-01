
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailOffOutline from "../../src/components/MdiPailOffOutline.vue";

test("MdiPailOffOutline snapshot", () => {
  const wrapper = mount(MdiPailOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
