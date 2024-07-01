
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransitTransfer from "../../src/components/MdiTransitTransfer.vue";

test("MdiTransitTransfer snapshot", () => {
  const wrapper = mount(MdiTransitTransfer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
