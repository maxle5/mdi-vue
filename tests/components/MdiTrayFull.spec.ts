
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrayFull from "../../src/components/MdiTrayFull.vue";

test("MdiTrayFull snapshot", () => {
  const wrapper = mount(MdiTrayFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
