
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreenOff from "../../src/components/MdiProjectorScreenOff.vue";

test("MdiProjectorScreenOff snapshot", () => {
  const wrapper = mount(MdiProjectorScreenOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
