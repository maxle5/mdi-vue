
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSprayBottle from "../../src/components/MdiSprayBottle.vue";

test("MdiSprayBottle snapshot", () => {
  const wrapper = mount(MdiSprayBottle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
