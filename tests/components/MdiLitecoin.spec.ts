
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLitecoin from "../../src/components/MdiLitecoin.vue";

test("MdiLitecoin snapshot", () => {
  const wrapper = mount(MdiLitecoin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
