
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIdeogramCjk from "../../src/components/MdiIdeogramCjk.vue";

test("MdiIdeogramCjk snapshot", () => {
  const wrapper = mount(MdiIdeogramCjk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
