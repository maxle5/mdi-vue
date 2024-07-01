
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbrellaOutline from "../../src/components/MdiUmbrellaOutline.vue";

test("MdiUmbrellaOutline snapshot", () => {
  const wrapper = mount(MdiUmbrellaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
