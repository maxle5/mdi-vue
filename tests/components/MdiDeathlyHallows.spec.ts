
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeathlyHallows from "../../src/components/MdiDeathlyHallows.vue";

test("MdiDeathlyHallows snapshot", () => {
  const wrapper = mount(MdiDeathlyHallows, {});
  expect(wrapper.html()).toMatchSnapshot();
});
