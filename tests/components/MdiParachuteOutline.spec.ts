
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiParachuteOutline from "../../src/components/MdiParachuteOutline.vue";

test("MdiParachuteOutline snapshot", () => {
  const wrapper = mount(MdiParachuteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
