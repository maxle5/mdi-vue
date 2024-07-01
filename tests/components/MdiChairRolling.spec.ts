
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChairRolling from "../../src/components/MdiChairRolling.vue";

test("MdiChairRolling snapshot", () => {
  const wrapper = mount(MdiChairRolling, {});
  expect(wrapper.html()).toMatchSnapshot();
});
