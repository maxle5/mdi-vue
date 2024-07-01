
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCards from "../../src/components/MdiCards.vue";

test("MdiCards snapshot", () => {
  const wrapper = mount(MdiCards, {});
  expect(wrapper.html()).toMatchSnapshot();
});
