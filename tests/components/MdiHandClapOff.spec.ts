
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandClapOff from "../../src/components/MdiHandClapOff.vue";

test("MdiHandClapOff snapshot", () => {
  const wrapper = mount(MdiHandClapOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
