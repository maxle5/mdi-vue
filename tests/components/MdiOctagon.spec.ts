
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagon from "../../src/components/MdiOctagon.vue";

test("MdiOctagon snapshot", () => {
  const wrapper = mount(MdiOctagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
