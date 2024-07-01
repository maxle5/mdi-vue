
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreen from "../../src/components/MdiProjectorScreen.vue";

test("MdiProjectorScreen snapshot", () => {
  const wrapper = mount(MdiProjectorScreen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
