
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCupOffOutline from "../../src/components/MdiCupOffOutline.vue";

test("MdiCupOffOutline snapshot", () => {
  const wrapper = mount(MdiCupOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
