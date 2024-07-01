
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChessPawn from "../../src/components/MdiChessPawn.vue";

test("MdiChessPawn snapshot", () => {
  const wrapper = mount(MdiChessPawn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
