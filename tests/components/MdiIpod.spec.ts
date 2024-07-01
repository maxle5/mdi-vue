
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIpod from "../../src/components/MdiIpod.vue";

test("MdiIpod snapshot", () => {
  const wrapper = mount(MdiIpod, {});
  expect(wrapper.html()).toMatchSnapshot();
});
