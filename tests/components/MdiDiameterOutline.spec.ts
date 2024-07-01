
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiameterOutline from "../../src/components/MdiDiameterOutline.vue";

test("MdiDiameterOutline snapshot", () => {
  const wrapper = mount(MdiDiameterOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
