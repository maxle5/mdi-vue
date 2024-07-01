
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpear from "../../src/components/MdiSpear.vue";

test("MdiSpear snapshot", () => {
  const wrapper = mount(MdiSpear, {});
  expect(wrapper.html()).toMatchSnapshot();
});
