
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertOctagram from "../../src/components/MdiAlertOctagram.vue";

test("MdiAlertOctagram snapshot", () => {
  const wrapper = mount(MdiAlertOctagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
