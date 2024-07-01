
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeehiveOutline from "../../src/components/MdiBeehiveOutline.vue";

test("MdiBeehiveOutline snapshot", () => {
  const wrapper = mount(MdiBeehiveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
