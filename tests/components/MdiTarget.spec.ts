
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTarget from "../../src/components/MdiTarget.vue";

test("MdiTarget snapshot", () => {
  const wrapper = mount(MdiTarget, {});
  expect(wrapper.html()).toMatchSnapshot();
});
