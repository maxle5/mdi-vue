
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerOutline from "../../src/components/MdiBeakerOutline.vue";

test("MdiBeakerOutline snapshot", () => {
  const wrapper = mount(MdiBeakerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
