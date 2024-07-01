
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbrellaClosed from "../../src/components/MdiUmbrellaClosed.vue";

test("MdiUmbrellaClosed snapshot", () => {
  const wrapper = mount(MdiUmbrellaClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
