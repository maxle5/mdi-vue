
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagram from "../../src/components/MdiOctagram.vue";

test("MdiOctagram snapshot", () => {
  const wrapper = mount(MdiOctagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
