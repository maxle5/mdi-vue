
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmartCard from "../../src/components/MdiSmartCard.vue";

test("MdiSmartCard snapshot", () => {
  const wrapper = mount(MdiSmartCard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
