
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIpOutline from "../../src/components/MdiIpOutline.vue";

test("MdiIpOutline snapshot", () => {
  const wrapper = mount(MdiIpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
