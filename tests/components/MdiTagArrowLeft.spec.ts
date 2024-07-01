
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowLeft from "../../src/components/MdiTagArrowLeft.vue";

test("MdiTagArrowLeft snapshot", () => {
  const wrapper = mount(MdiTagArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
