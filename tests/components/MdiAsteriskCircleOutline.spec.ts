
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAsteriskCircleOutline from "../../src/components/MdiAsteriskCircleOutline.vue";

test("MdiAsteriskCircleOutline snapshot", () => {
  const wrapper = mount(MdiAsteriskCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
