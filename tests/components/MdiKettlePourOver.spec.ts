
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettlePourOver from "../../src/components/MdiKettlePourOver.vue";

test("MdiKettlePourOver snapshot", () => {
  const wrapper = mount(MdiKettlePourOver, {});
  expect(wrapper.html()).toMatchSnapshot();
});
