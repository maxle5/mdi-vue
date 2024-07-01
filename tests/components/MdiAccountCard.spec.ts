
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCard from "../../src/components/MdiAccountCard.vue";

test("MdiAccountCard snapshot", () => {
  const wrapper = mount(MdiAccountCard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
