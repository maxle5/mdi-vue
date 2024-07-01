
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTennis from "../../src/components/MdiTennis.vue";

test("MdiTennis snapshot", () => {
  const wrapper = mount(MdiTennis, {});
  expect(wrapper.html()).toMatchSnapshot();
});
