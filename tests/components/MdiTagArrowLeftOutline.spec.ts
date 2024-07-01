
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowLeftOutline from "../../src/components/MdiTagArrowLeftOutline.vue";

test("MdiTagArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiTagArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
