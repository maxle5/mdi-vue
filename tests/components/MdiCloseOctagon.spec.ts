
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseOctagon from "../../src/components/MdiCloseOctagon.vue";

test("MdiCloseOctagon snapshot", () => {
  const wrapper = mount(MdiCloseOctagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
