
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreenOffOutline from "../../src/components/MdiProjectorScreenOffOutline.vue";

test("MdiProjectorScreenOffOutline snapshot", () => {
  const wrapper = mount(MdiProjectorScreenOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
