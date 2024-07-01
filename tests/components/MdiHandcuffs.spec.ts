
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandcuffs from "../../src/components/MdiHandcuffs.vue";

test("MdiHandcuffs snapshot", () => {
  const wrapper = mount(MdiHandcuffs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
