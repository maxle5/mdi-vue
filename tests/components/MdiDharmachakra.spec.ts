
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDharmachakra from "../../src/components/MdiDharmachakra.vue";

test("MdiDharmachakra snapshot", () => {
  const wrapper = mount(MdiDharmachakra, {});
  expect(wrapper.html()).toMatchSnapshot();
});
