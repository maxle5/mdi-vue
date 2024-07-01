
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorOff from "../../src/components/MdiProjectorOff.vue";

test("MdiProjectorOff snapshot", () => {
  const wrapper = mount(MdiProjectorOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
