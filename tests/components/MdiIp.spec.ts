
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIp from "../../src/components/MdiIp.vue";

test("MdiIp snapshot", () => {
  const wrapper = mount(MdiIp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
