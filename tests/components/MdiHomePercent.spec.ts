
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomePercent from "../../src/components/MdiHomePercent.vue";

test("MdiHomePercent snapshot", () => {
  const wrapper = mount(MdiHomePercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
