
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableTennis from "../../src/components/MdiTableTennis.vue";

test("MdiTableTennis snapshot", () => {
  const wrapper = mount(MdiTableTennis, {});
  expect(wrapper.html()).toMatchSnapshot();
});
