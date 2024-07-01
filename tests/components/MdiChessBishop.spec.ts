
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChessBishop from "../../src/components/MdiChessBishop.vue";

test("MdiChessBishop snapshot", () => {
  const wrapper = mount(MdiChessBishop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
