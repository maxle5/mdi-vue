
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomePercentOutline from "../../src/components/MdiHomePercentOutline.vue";

test("MdiHomePercentOutline snapshot", () => {
  const wrapper = mount(MdiHomePercentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
